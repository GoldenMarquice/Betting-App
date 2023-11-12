from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import TeamSerializer, PlayerSerializer, ContestSerializer
from .models import Team, Player, Contest
import requests
from .data import lions

# Create your views here.

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    
    @action(detail=False, methods=['get'])
    def loadData(self, request):

        # do the magic here    
        url = "https://americanfootballapi.p.rapidapi.com/api/american-football/team/7/players"
        #url = " https://v1.american-football.api-sports.io/players?season=2023&team=7"
        headers = {
            "X-RapidAPI-Key": "d801ecf5e5msh280f43335d3a18bp19ae85jsn8e922578fd4a",
            "X-RapidAPI-Host": "americanfootballapi.p.rapidapi.com"
           # 'x-rapidapi-key':"d801ecf5e5msh280f43335d3a18bp19ae85jsn8e922578fd4a",
           # 'x-rapidapi-host': 'v1.american-football.api-sports.io'
        }
       # response = requests.get(url, headers=headers)
       # print(response.json())

        players = lions["response"]

        # migrations
        # for on players,
        # get every player and create a PLayer db record
        # save the record


        return Response(players)


class ContestViewSet(viewsets.ModelViewSet):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
