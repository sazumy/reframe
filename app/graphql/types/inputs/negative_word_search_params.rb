# frozen_string_literal: true

module Types
  module Inputs
    class NegativeWordSearchParams < Types::BaseInputObject
      argument :kana, String, required: false
      argument :content, String, required: false
    end
  end
end
