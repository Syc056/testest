# Generated by Django 5.0.3 on 2024-03-23 02:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frame', '0003_frame_photo_hover'),
    ]

    operations = [
        migrations.AddField(
            model_name='frame',
            name='position',
            field=models.TextField(default='center'),
        ),
    ]
