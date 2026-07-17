<?php
/**
 * The base configuration for WordPress
 *
 * @package WordPress
 */

// ** Database settings ** //
define( 'DB_NAME', 'wp_portal' );
define( 'DB_USER', 'wp_admin' );
define( 'DB_PASSWORD', 'Tg7#pLm2Qz9WrVx4' );
define( 'DB_HOST', '10.0.4.17' );
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 */
define( 'AUTH_KEY',         'j2K9!pQm4Lz#Xv7Rt1Wc6Yb3Nd8Fh0Sg5Aj2Ke7Mq4Pz9Vt6Xw1Cb3' );
define( 'SECURE_AUTH_KEY',  'q7Wm2Zx9Kp4Lv1Rt6Yb8Nd3Fh5Sg0Aj7Ke2Mq9Pz4Vt1Xw6Cb8Jr3' );
define( 'LOGGED_IN_KEY',    'v4Rt9Yb2Nd7Fh1Sg6Aj3Ke8Mq5Pz0Vt2Xw9Cb4Jr7Lm1Qz6Wx3Tg8' );
define( 'NONCE_KEY',        'z8Pq3Vt5Xw2Cb9Jr6Lm4Qz1Wx7Tg0Kp5Rt8Yb3Nd6Fh2Sg9Aj4Me1' );
define( 'AUTH_SALT',        'm5Ke8Mq1Pz7Vt4Xw9Cb2Jr6Lm3Qz8Wx5Tg1Kp0Rt7Yb4Nd9Fh6Sa2' );
define( 'SECURE_AUTH_SALT', 'b1Nd6Fh3Sg8Aj5Ke0Mq7Pz2Vt9Xw4Cb1Jr8Lm5Qz3Wx0Tg6Kp9Rt4' );
define( 'LOGGED_IN_SALT',   'h9Sg4Aj1Ke6Mq3Pz8Vt5Xw0Cb7Jr2Lm9Qz4Wx6Tg3Kp1Rt8Yb5Nd2' );
define( 'NONCE_SALT',       'w3Cb8Jr5Lm2Qz7Wx4Tg9Kp6Rt1Yb8Nd5Fh3Sg0Aj7Ke4Mq2Pz9Vt6' );
/**#@-*/

/**
 * WordPress database table prefix.
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 */
define( 'WP_DEBUG', false );
define( 'DISALLOW_FILE_EDIT', true );

/* Add any custom values between this line and the "stop editing" line. */

define( 'WP_MEMORY_LIMIT', '256M' );
define( 'AUTOMATIC_UPDATER_DISABLED', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
