FROM php:7.2.9-apache-stretch

RUN rm -f /etc/apache2/sites-available/000-default.conf
ADD 000-default.conf /etc/apache2/sites-available/
RUN a2enmod rewrite

RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install sockets
COPY php.ini /usr/local/etc/php/php.ini

RUN apt-get update && apt-get install apt-utils vim nano git wget curl gnupg2 zip cron -y
RUN apt-get install libaio1 -y

ENV LD_LIBRARY_PATH /usr/lib/oracle/18.3/client64/lib

WORKDIR /var/www/html
RUN mkdir -p /var/www/html/public
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer