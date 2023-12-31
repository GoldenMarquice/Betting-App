# Generated by Django 4.2.6 on 2023-10-22 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ActiveBets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('currentBetsUser', models.TextField(max_length=125)),
            ],
        ),
        migrations.CreateModel(
            name='CurrentGames',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gamesUnfinished', models.TextField(max_length=125)),
            ],
        ),
        migrations.CreateModel(
            name='HistoricalData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gamesPlayed', models.TextField(max_length=125)),
                ('betsMade', models.TextField(max_length=125)),
            ],
        ),
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('currentBalance', models.IntegerField(max_length=125)),
                ('deposit', models.IntegerField(max_length=125)),
                ('withdraw', models.IntegerField(max_length=125)),
                ('transactionHistory', models.TextField(max_length=125)),
            ],
        ),
    ]
