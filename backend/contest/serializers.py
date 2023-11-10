from rest_framework import serializers
from .models import Team, Player, Contest

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = "__all__"

class ContestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contest 
        fields = "__all__"
