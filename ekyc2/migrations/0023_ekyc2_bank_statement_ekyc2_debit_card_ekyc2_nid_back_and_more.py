# Generated by Django 4.0.3 on 2022-05-27 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ekyc2', '0022_remove_ekyc2_filedetails3_ekyc2_selfie'),
    ]

    operations = [
        migrations.AddField(
            model_name='ekyc2',
            name='bank_statement',
            field=models.FileField(default=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='ekyc2',
            name='debit_card',
            field=models.FileField(default=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='ekyc2',
            name='nid_back',
            field=models.FileField(default=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='ekyc2',
            name='nid_front',
            field=models.FileField(default=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='ekyc2',
            name='utility_bill',
            field=models.FileField(default=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='ekyc2',
            name='selfie',
            field=models.FileField(default=True, upload_to=''),
        ),
    ]
