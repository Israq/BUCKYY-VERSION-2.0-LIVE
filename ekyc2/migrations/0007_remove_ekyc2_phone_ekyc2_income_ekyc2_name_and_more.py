# Generated by Django 4.0.3 on 2022-05-16 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ekyc2', '0006_rename_name_ekyc2_gender'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ekyc2',
            name='phone',
        ),
        migrations.AddField(
            model_name='ekyc2',
            name='income',
            field=models.CharField(default=True, max_length=100),
        ),
        migrations.AddField(
            model_name='ekyc2',
            name='name',
            field=models.CharField(default=True, max_length=100),
        ),
        migrations.AddField(
            model_name='ekyc2',
            name='profession',
            field=models.CharField(default=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='ekyc2',
            name='gender',
            field=models.CharField(choices=[('Male', 'male'), ('Female', 'female')], max_length=255),
        ),
    ]