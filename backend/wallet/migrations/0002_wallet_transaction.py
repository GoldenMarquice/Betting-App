# Generated by Django 4.2.6 on 2023-10-25 02:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wallet', '0001_wallet'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wallet',
            name='currentBalance',
        ),
        migrations.RemoveField(
            model_name='wallet',
            name='deposit',
        ),
        migrations.RemoveField(
            model_name='wallet',
            name='transactionHistory',
        ),
        migrations.RemoveField(
            model_name='wallet',
            name='withdraw',
        ),
        migrations.AddField(
            model_name='wallet',
            name='balance',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('Deposit', 'Deposit'), ('Withdrawal', 'Withdrawal'), ('GamePurchase', 'GamePurchase'), ('Win', 'Win'), ('Loss', 'Loss')], max_length=25)),
                ('payment_method', models.CharField(choices=[('Paypal', 'Paypal'), ('Venmo', 'Venmo'), ('CreditCard', 'CreditCard'), ('Promotion', 'Promotion')], max_length=50)),
                ('amount', models.FloatField()),
                ('date', models.DateTimeField()),
                ('element_id', models.IntegerField()),
                ('wallet', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='wallet.wallet')),
            ],
        ),
    ]
