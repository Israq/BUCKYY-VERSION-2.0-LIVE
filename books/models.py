from django.db import models

class Book(models.Model):
    BOOK_CHOICES = (
        ('perks of being','Perks of being'),
        ('All the bright','All the bright'),
        ('The girl on the','The girl on the'),
        ('Django','Django'),
    )
  
    title = models.CharField(max_length= 100, choices=BOOK_CHOICES)