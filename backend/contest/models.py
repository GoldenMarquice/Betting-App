from django.db import models

# Create your models here.
 #team.players.all()
class Team(models.Model):
   name = models.CharField(max_length=250)
   league = models.CharField(max_length=10)


class Player(models.Model):
   first_name = models.CharField(max_length=250)
   last_name = models.CharField(max_length=250)
   team = models.ForeignKey(Team, related_name="players", on_delete=models.CASCADE)
   position = models.CharField(max_length=150)
   image = models.CharField(max_length=500, null=True, blank=True)

# class Contest(models.Model):
#    team = 
#    league =
#    player =
#    prize =

class Contest(models.Model):
   league = models.CharField(max_length=250)
   name = models.CharField(max_length=100)
   date = models.DateTimeField()
   prize = models.FloatField()