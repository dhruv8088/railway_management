from django.db import models
from viewflow.fields import CompositeKey
# Create your models here.
class Train(models.Model):
    T_ID = models.IntegerField(primary_key = True)
    T_Name = models.CharField(max_length = 20)
    T_type = models.CharField(max_length = 20)

class Passengers(models.Model):
    P_ID = models.IntegerField(primary_key = True)
    P_Name = models.CharField(max_length = 30)
    Gender = models.CharField(max_length = 1)
    Age = models.IntegerField()
    Seat_number = models.IntegerField()
    Coaches = models.CharField(max_length = 2)
    train = models.ForeignKey(Train,on_delete = models.CASCADE)

class Schedule(models.Model):
    Schedule_id = models.CharField(max_length = 20,primary_key = True)
    Source = models.CharField(max_length = 20)
    Destination = models.CharField(max_length = 20)
    Start_time = models.DateTimeField()
    End_time = models.DateTimeField()

class Tracks(models.Model):   
    Track_no = models.IntegerField(primary_key = True)
    length = models.IntegerField()

class Station(models.Model):
    S_id = models.CharField(primary_key = True,max_length = 10)
    S_Name = models.CharField(max_length = 20)
    Place = models.CharField(max_length = 30)
    track = models.ForeignKey(Tracks,on_delete = models.CASCADE)

class Moves_on(models.Model):
    
    Track = models.ForeignKey(Tracks,on_delete = models.CASCADE,unique = True)
    Train = models.ForeignKey(Train,on_delete = models.CASCADE, unique = True)

    class Meta:
        unique_together = (('Track', 'Train'),)

class Follows(models.Model):
    
    Schedule = models.ForeignKey(Schedule,on_delete = models.CASCADE,unique = True)
    Train = models.ForeignKey(Train,on_delete = models.CASCADE, unique = True)

    class Meta:
        unique_together = (('Schedule', 'Train'),)
    



