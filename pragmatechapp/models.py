from django.db import models

class Applicant(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=30)
    date_applied = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name

class Message(models.Model):
    sender_name = models.CharField(max_length=20)
    sender_email = models.EmailField(max_length=50)
    message_subject = models.CharField(max_length=100)
    message_content = models.CharField(max_length=300)
    date_sent = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.message_subject