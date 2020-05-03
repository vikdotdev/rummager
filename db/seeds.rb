User.__elasticsearch__.create_index! force: true
Project.__elasticsearch__.create_index! force: true

FactoryBot.create_list(:user, 20)
FactoryBot.create_list(:project, 20)
