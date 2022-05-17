from random import choices
from django.db import models

# Create your models here.
class Ekyc2(models.Model):
     sno= models.AutoField(primary_key=True)
     GENDER_CHOICES = (
        ('Male','male'),
        ('Female','female'),
       
    )
    
     gender= models.CharField(max_length=255, choices=GENDER_CHOICES)
     
     email= models.CharField(max_length=100)
     name= models.CharField(max_length=100,default=True)
     profession= models.CharField(max_length=100,default=True)
     
     address= models.CharField(max_length=100,default=True)
    
     timeStamp=models.DateTimeField(auto_now_add=True, blank=True)