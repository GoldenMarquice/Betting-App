# Generated by Django 4.2.6 on 2023-11-08 01:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0002_contest'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='player_images/'),
        ),
    ]
