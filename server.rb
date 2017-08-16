require 'sinatra'

get '/' do
	File.read(File.join('public', 'newday.html'))
end