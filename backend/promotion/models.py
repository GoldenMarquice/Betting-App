from django.db import models


class Promos(models.Model):
    TRANSACTION_TYPES = (
        ('Starter', 'Starter'),
        ('New', 'New'),
    )
class Wallet(models.Model):
    code = models.FloatField(null=True, blank=True)
    promoName = models.CharField(max_length=25, choices=Promos)
# Create your models here.
