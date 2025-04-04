# Generated by Django 4.2.19 on 2025-03-02 04:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('category', models.CharField(choices=[('dhuafa', 'Peduli Dhuafa'), ('yatim', 'Peduli Anak Yatim'), ('quran', 'Wakaf Mushaf Al Quran'), ('qurban', 'Qurban Peduli'), ('palestine', 'Bantuan Palestina'), ('education', 'Bantuan Pendidikan'), ('iftar', 'Berbagi Iftar'), ('jumat', 'Jumat Berkah')], max_length=20)),
                ('thumbnail', models.ImageField(upload_to='campaign_images/')),
                ('target_amount', models.DecimalField(decimal_places=2, max_digits=12)),
                ('current_amount', models.DecimalField(decimal_places=2, default=0, max_digits=12)),
                ('is_featured', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('deadline', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Update',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('campaign', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='updates', to='campaigns.campaign')),
            ],
        ),
    ]
