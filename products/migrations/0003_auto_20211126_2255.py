# Generated by Django 3.2.9 on 2021-11-26 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20211126_2247'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='add_time',
        ),
        migrations.RemoveField(
            model_name='products',
            name='name',
        ),
        migrations.RemoveField(
            model_name='products',
            name='price',
        ),
        migrations.RemoveField(
            model_name='products',
            name='type',
        ),
        migrations.AlterField(
            model_name='products',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
