from rest_framework import serializers

from .models import Login, SignUp


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = "__all__"

class Signup(serializers.ModelSerializer):
    class Meta:
        model = SignUp
        fields ="__all__"