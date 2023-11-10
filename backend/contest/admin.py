from django.contrib import admin
from .models import Team, Player

# Register your models here.

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    pass

@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    pass