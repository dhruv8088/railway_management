from django.contrib import admin
from django.urls import path,include
from .views import TrainViewSet,StationViewSet,ScheduleViewSet,TracksViewSet,PassengersViewSet,Moves_on_ViewSet,FollowsViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'train' ,TrainViewSet)
router.register(r'station' ,StationViewSet)
router.register(r'passengers' ,PassengersViewSet)
router.register(r'tracks' ,TracksViewSet)
router.register(r'schedule' ,ScheduleViewSet)
router.register(r'movesOn' ,Moves_on_ViewSet)
router.register(r'follows' ,FollowsViewSet)
urlpatterns = [
    path('',include(router.urls))
]
