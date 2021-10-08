#************** TWO SUM **************#
def two_sum(numbers, target)
  dict = {}
  numbers.each_with_index do |n, i|
    if dict[target - n]
      return dict[target - n], i
    end
    dict[n] = i
  end
end

#************** WeIrD StRiNg CaSe **************#
def weirdcase string
  weird_string = []
  words = string.split(" ")

  words.each do |word|
    letters = word.split("")
    letters.each_with_index do |letter, index|
      print index
      if index == 0
        weird_string << " #{letter.upcase}"
      elsif index.even?
        weird_string << letter.upcase
      else
        weird_string << letter
      end
    end
  end
  p weird_string
  weird_string.join("").lstrip
end

#************** RESPONSIBLE DRINKING **************#
def hydrate(s)
  numbers = s.scan(/\d/)
  water = numbers.map(&:to_i).sum
  if water > 1
    "#{water} glasses of water"
   else
    "#{water} glass of water"
   end
end

#************** SHORTEST WORD **************#
def find_short(s)
    to_ary = s.split
    l = to_ary.sort! { |a,b| a.length <=> b.length}
    return l[0].length
end

#************** NUMBER OF PEOPLE ON THE BUS **************#
def number(bus_stops)
  all = bus_stops.flatten
  gets_on = []
  gets_off = [] 
  all.each_with_index do |val, idx|
    if idx.even?
      gets_on << val
    else
      gets_off << val
    end
  end
  gets_on.sum - gets_off.sum
end

#************** LIST FILTERING **************#
def filter_list(l)
  ary = []
  l.each { |x| x.is_a?(Integer) ? ary << x : false}
  ary
end

#************** EXES AND OHS **************#
def XO(str)
  if str.count("x, X") == str.count("o, O")
    return true
  elsif str.count("x, X") == 0 && str.count("o, O") == 0
    return true
  else
    return false
  end
end

#************** CATEGORIZE NEW MEMBER **************#
def openOrSenior(data)
  cat = []
  data.each do |age, hcp|
    if age > 54 && hcp > 7
      cat << "Senior"
    else
      cat << "Open"
    end
  end
  return cat
end