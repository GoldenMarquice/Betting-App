from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager,
                                        Permission, PermissionsMixin)
from django.db import models


#Create your models here.
class CustomUserManager(BaseUserManager):
    def get_by_natural_key(self, username_field):
        return self.get(**{self.model.USERNAME_FIELD:username_field})

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password) # encrypt the password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
    
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, blank=True)
    first_name = models.CharField(max_length=30, null=True, blank=True)
    last_name = models.CharField(max_length=30, null=True, blank=True)
    age = models.DateField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)


    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    user_permissions = models.ManyToManyField(
        Permission,
        blank=True,
        related_name="my_user_set",
        related_query_name='user'
    )

    def __str__(self):
        return self.email


    # class Meta:
    #     permissions = [
    #         ("can_view_user_profile", "Can view user profile"),
    #         ("can_edit_user_profile", "Can edit user profile"),
    #         ("can_delete_user_profile", "Can delete user profile"),
    #     ]