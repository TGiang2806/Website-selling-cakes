# Generated by Django 3.2.9 on 2021-11-26 15:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20211126_2255'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='add_time',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='products',
            name='name',
            field=models.CharField(default='Product', max_length=200),
        ),
        migrations.AddField(
            model_name='products',
            name='price',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='products',
            name='type',
            field=models.CharField(choices=[('1', 'Bánh mặn'), ('2', 'Bánh ngọt'), ('3', 'Dụng cụ làm bánh')], default='0', max_length=200),
        ),
        migrations.AlterField(
            model_name='products',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
