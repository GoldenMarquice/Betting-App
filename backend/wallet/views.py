from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import (SessionAuthentication,
                                           TokenAuthentication)
from rest_framework.decorators import (api_view, authentication_classes,
                                       permission_classes)
from rest_framework.permissions import IsAuthenticated

from .models import Wallet
from .serializers import WalletSerializer

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