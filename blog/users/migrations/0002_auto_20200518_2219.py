# Generated by Django 3.0.6 on 2020-05-18 16:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='followering',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='author_following', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='author',
            name='followers',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='author_followers', to=settings.AUTH_USER_MODEL),
        ),
    ]