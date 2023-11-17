from django.http import JsonResponse
from django.shortcuts import render
from django.utils import timezone
from rest_framework import viewsets
from rest_framework.authentication import (SessionAuthentication,
                                           TokenAuthentication)
from rest_framework.decorators import (action, api_view,
                                       authentication_classes,
                                       permission_classes)
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Transaction, Wallet
from .serializers import TransactionSerializer, WalletSerializer


def handlePayPalPayment(order_id, amount, payment_method):
    # ... (your existing logic)

    # Record the transaction
    try:
        wallet = Wallet.objects.get(user=request.user)  # Assuming you have user authentication
        transaction = Transaction.objects.create(
            wallet=wallet,
            type='Deposit',
            payment_method=payment_method,
            amount=amount,
            date=timezone.now(),
            element_id=order_id
        )
        transaction.save()
    except Wallet.DoesNotExist:
        return JsonResponse({'error': 'Wallet not found for the user'})

    # ... (your existing logic)


# @api_view(['POST'])
# @authentication_classes([SessionAuthentication, TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def update_balance(request):
#     if request.method == 'POST':
#         new_balance = float(request.data.get('new_balance'))  # Assuming you are using DRF
#         try:
#             user_wallet = Wallet.objects.get(user=request.user)
#             user_wallet.balance = new_balance
#             user_wallet.save()
#             return JsonResponse({'message': 'Balance updated successfully'})
#         except Wallet.DoesNotExist:
#             return JsonResponse({'error': 'Wallet not found for the user'})
#     return JsonResponse({'error': 'Invalid request method'})
# Create your views here.

class WalletViewSet(viewsets.ModelViewSet):
    queryset = Wallet.objects.all()
    serializer_class=WalletSerializer

    @action(detail=False, methods=['get'])
    def my_wallet(self, request):
        wallet = Wallet.objects.get(user=request.user)
        print(wallet)
        serializer = WalletSerializer(wallet)
        return Response(serializer.data)



class TransactionListView(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

        # update the wallet
        wallet = Wallet.objects.get(user=request.user)
        if request.data["type"] =='Deposit':
            wallet.balance += request.data["amount"]
        elif request.data["type"] =='Withdrawal':
            wallet.balance -= request.data["amount"]
        wallet.save()

        return Response(serializer.data)