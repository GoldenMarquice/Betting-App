from django.contrib import admin

from .models import Transaction, Wallet

# Register your models here.

@admin.register(Wallet)
class WalletAdmin(admin.ModelAdmin):
    pass

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    pass