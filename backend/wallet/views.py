from django.shortcuts import render
from rest_framework import viewsets

from .models import Wallet
from .serializers import WalletSerializer

# Create your views here.

class WalletViewSet(viewsets.ModelViewSet):
    queryset = Wallet.objects.all()
    serializer_class=WalletSerializer