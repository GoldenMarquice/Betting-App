
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('wallet', views.WalletViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('update_balance/', update_balance, name='update_balance'),
]