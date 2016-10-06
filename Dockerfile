FROM tutum/lamp:latest
RUN rm -fr /app && rm -fr /var/www/html && rm -fr /tanveer && git clone https://github.com/willbod/html5-boilerplate /tanveer && ln -s /tanveer/static /var/www/html
EXPOSE 80 3306
CMD ["/run.sh"]
