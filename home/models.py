from django.db import models

# Create your models here.

class PhoneNumber(models.Model):
    phone_number = models.IntegerField()

