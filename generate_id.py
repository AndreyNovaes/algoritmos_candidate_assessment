import random
import string

def generate_id():
    def generate_four_random_characters():
      return ''.join(random.choices(string.ascii_lowercase + string.digits, k=4))

    return '-'.join([generate_four_random_characters() for _ in range(4)])

id = generate_id()
print(id)