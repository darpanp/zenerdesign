# == Schema Information
# Schema version: 20100414032233
#
# Table name: users
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  password   :string(255)
#  email      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class User < ActiveRecord::Base
end
