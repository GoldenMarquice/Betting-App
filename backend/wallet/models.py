from django.db import models


class Wallet(models.Model):
    balance = models.FloatField(null=True, blank=True)
    #user= models.CharField()



class Transaction(models.Model):
    TRANSACTION_TYPES = (
        ('Deposit', 'Deposit'),
        ('Withdrawal', 'Withdrawal'),
        ('GamePurchase', 'GamePurchase'),
        ('Win', 'Win'),
        ('Loss', 'Loss'),
    )

    PAYMENT_METHODS = (
        ('Paypal', 'Paypal'),
        ('Venmo', 'Venmo'),
        ('CreditCard', 'CreditCard'),
        ('Promotion', 'Promotion'),
    )

    wallet = models.ForeignKey(Wallet, on_delete=models.CASCADE, null=True, blank=True )
    type = models.CharField(max_length=25, choices=TRANSACTION_TYPES)
    payment_method = models.CharField(max_length=50, choices=PAYMENT_METHODS)
    amount = models.FloatField()
    date = models.DateTimeField()
    element_id = models.IntegerField()
    


class ActiveBets(models.Model):
    currentBetsUser = models.TextField(max_length=125)

class CurrentGames(models.Model):
    gamesUnfinished = models.TextField(max_length=125)

class HistoricalData(models.Model):
    gamesPlayed = models.TextField(max_length=125)
    betsMade =models.TextField(max_length=125)

# Create your models here.
