User.__elasticsearch__.create_index! force: true
FactoryBot.create_list(:user, 50)
