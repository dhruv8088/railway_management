from rest_framework import serializers
from .models import Train,Passengers,Station,Schedule,Tracks,Moves_on,Follows

class TrainSerializer(serializers.HyperlinkedModelSerializer):
    T_ID = serializers.IntegerField(read_only = False)
    class Meta:
        model = Train
        fields = '__all__'

class PassengersSerializer(serializers.HyperlinkedModelSerializer):
    P_ID = serializers.IntegerField(read_only = False)
    class Meta:
        model = Passengers
        fields = '__all__'

class TracksSerializer(serializers.HyperlinkedModelSerializer):
    Track_no = serializers.IntegerField(read_only = False)
    class Meta:
        model = Tracks
        fields = '__all__'

class StationSerializer(serializers.HyperlinkedModelSerializer):
    S_id = serializers.CharField(read_only = False)
    class Meta:
        model = Station
        fields = '__all__'

class ScheduleSerializer(serializers.HyperlinkedModelSerializer):
    Schedule_id = serializers.CharField(read_only = False)
    class Meta:
        model = Schedule
        fields = '__all__'

class Moves_on_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Moves_on
        fields = ['Track','Train']

class FollowsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Follows
        fields = ['Schedule','Train']