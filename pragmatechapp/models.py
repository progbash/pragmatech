from django.db import models

class Applicant(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=30)
    
    def __str__(self):
        return self.name