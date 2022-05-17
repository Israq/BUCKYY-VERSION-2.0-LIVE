from random import choices
from django.db import models

# Create your models here.
class Contact(models.Model):
     sno= models.AutoField(primary_key=True)
     NAME_CHOICES = (
        ('A','a'),
        ('B','b'),
        ('C','c'),
        ('D','d')
    )
    
     name= models.CharField(max_length=255, choices=NAME_CHOICES)
     phone= models.CharField(max_length=13)
     email= models.CharField(max_length=100)
    
     timeStamp=models.DateTimeField(auto_now_add=True, blank=True)
 


