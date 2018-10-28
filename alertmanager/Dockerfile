FROM centos

COPY alertmanager /bin/alertmanager
COPY alertmanager.yml /etc/alertmanager/config.yml

EXPOSE 9093

ENTRYPOINT ["/bin/alertmanager"]

CMD ["--config.file=/etc/alertmanager/config.yml"]