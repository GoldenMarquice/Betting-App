from django.shortcuts import render
from login.models import CustomUser
from login.serializers import CustomUserSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    @action(detail=False, methods=['get'])
    def me(self, request):
        #read the current user
        serailizer = CustomUserSerializer(request.user)
        return Response(serailizer.data)