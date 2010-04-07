# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_zenerdesign_session',
  :secret      => '4b0ddd0f3589ac0c53dfa9f148b9b73af42c295c13504d2647f57c8e453a6a89b98a7d63758c6ff2f7e5c68680bc97aa04b0fecf20b09378c84d49138f2b0ba7'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
