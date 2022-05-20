from django.core.validators import MaxValueValidator, MinValueValidator
from random import choices
from sunau import Au_read
from django.db import models

# Create your models here.
class Ekyc2(models.Model):
     sno= models.AutoField(primary_key=True)
     GENDER_CHOICES = (
        ('Male','male'),
        ('Female','female'),
       
    )
     INCOME_CHOICE=(
        ('Below BDT 1000','Below BDT 1000'),
        ('BDT 1001 - 5000','BDT 1001 - 5000'),
        ('BDT 5001 -10000','BDT 5001 -10000'),
        ('BDT 10,001 - 20,000','BDT 10,001 - 20,000'),
        ('BDT 20,001 - 50,000','BDT 20,001 - 50,000'),
        ('BDT 50,001 - 100,000','BDT 50,001 - 100,000'),
        ('BDT 100,001 - 200,000','BDT 100,001 - 200,000'),
        ('More than 200,000','More than 200,000'),
        
    )
    
     gender= models.CharField(max_length=255, choices=GENDER_CHOICES)
     
     email= models.CharField(max_length=100)
     name= models.CharField(max_length=100,default=True)
     profession= models.CharField(max_length=100,default=True)
     selfie= models.ImageField(upload_to ='images',default=True)
     income= models.CharField( max_length=100,default=True,
        choices=INCOME_CHOICE)

     
     address= models.CharField(max_length=100,default=True)
    
     timeStamp=models.DateTimeField(auto_now_add=True, blank=True)