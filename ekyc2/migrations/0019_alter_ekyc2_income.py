# Generated by Django 4.0.3 on 2022-05-18 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ekyc2', '0018_alter_ekyc2_income'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ekyc2',
            name='income',
            field=models.PositiveIntegerField(choices=[('Below BDT 1000', '1000'), ('Below BDT 1000', '1000')], null=True),
        ),
    ]