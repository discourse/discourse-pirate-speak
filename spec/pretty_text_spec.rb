# frozen_string_literal: true

RSpec.describe PrettyText do
  it "cooks posts with the plugin installed" do
    expect(PrettyText.cook("Ahoy, matey!")).to eq("<p>Ahoy, matey!</p>")
  end
end
