from django.shortcuts import render
from login.models import CustomUser
from login.serializers import CustomUserSerializer
from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer