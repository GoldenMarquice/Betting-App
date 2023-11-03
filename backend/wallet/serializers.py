from rest_framework import serializers

from .models import ActiveBets, CurrentGames, HistoricalData, Wallet


class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = "__all__" #double_

class ActiveBetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActiveBets
        fields = "__all__" #double_

class CurrentGamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentGames
        fields = "__all__" #double_

class HistoricalData(serializers.ModelSerializer):
    class Meta:
        model = HistoricalData
        fields = "__all__" #double_