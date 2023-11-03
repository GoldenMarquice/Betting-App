from django.contrib.auth.models import Permission
from django.db import models


class Login(models.Model):
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

class SignUp(models.Model):
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    first_name = models.CharField(max_length=30, null=True, blank=True)
    last_name = models.CharField(max_length=30, null=True, blank=True)
    age = models.DateField(auto_now_add=True)

    class Meta:
        permissions = [
            ("can_view_user_profile", "Can view user profile"),
            ("can_edit_user_profile", "Can edit user profile"),
            ("can_delete_user_profile", "Can delete user profile"),
        ]