from django.shortcuts import render
from rest_framework import viewsets
from .models import Train,Tracks,Station,Passengers,Schedule,Moves_on,Follows
from .serializers import TrainSerializer,TracksSerializer,StationSerializer,PassengersSerializer,ScheduleSerializer,Moves_on_Serializer,FollowsSerializer

# Create your views here.
class TrainViewSet(viewsets.ModelViewSet):
    queryset = Train.objects.all() 
    serializer_class = TrainSerializer

class StationViewSet(viewsets.ModelViewSet):
    queryset = Station.objects.all() 
    serializer_class = StationSerializer

class TracksViewSet(viewsets.ModelViewSet):
    queryset = Tracks.objects.all() 
    serializer_class = TracksSerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all() 
    serializer_class = ScheduleSerializer

class PassengersViewSet(viewsets.ModelViewSet):
    queryset = Passengers.objects.all() 
    serializer_class = PassengersSerializer

class Moves_on_ViewSet(viewsets.ModelViewSet):
    queryset = Moves_on.objects.all() 
    serializer_class = Moves_on_Serializer

class FollowsViewSet(viewsets.ModelViewSet):
    queryset = Follows.objects.all() 
    serializer_class = FollowsSerializer

