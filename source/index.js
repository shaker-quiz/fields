import POST_theme_cover_admin from './forms/POST/theme/cover/admin.json' with { type: 'json' }
import POST_theme_admin from './forms/POST/theme/admin.json' with { type: 'json' }
import POST_checkin_Unknown from './forms/POST/checkin/Unknown.json' with { type: 'json' }
import POST_user_role_admin from './forms/POST/user/role/admin.json' with { type: 'json' }
import POST_user_city_admin from './forms/POST/user/city/admin.json' with { type: 'json' }
import POST_user_password_admin from './forms/POST/user/password/admin.json' with { type: 'json' }
import POST_user_admin from './forms/POST/user/admin.json' with { type: 'json' }
import POST_game_admin from './forms/POST/game/admin.json' with { type: 'json' }
import POST_game_organizer from './forms/POST/game/organizer.json' with { type: 'json' }
import POST_city_vk_group_token_admin from './forms/POST/city/vk_group_token/admin.json' with { type: 'json' }
import POST_city_admin from './forms/POST/city/admin.json' with { type: 'json' }
import POST_venue_admin from './forms/POST/venue/admin.json' with { type: 'json' }
import POST_venue_organizer from './forms/POST/venue/organizer.json' with { type: 'json' }
import POST_registration_Unknown from './forms/POST/registration/Unknown.json' with { type: 'json' }
import POST_registration_admin from './forms/POST/registration/admin.json' with { type: 'json' }
import POST_registration_organizer from './forms/POST/registration/organizer.json' with { type: 'json' }
import PATCH_theme_admin from './forms/PATCH/theme/admin.json' with { type: 'json' }
import PATCH_user_role_admin from './forms/PATCH/user/role/admin.json' with { type: 'json' }
import PATCH_user_password_admin from './forms/PATCH/user/password/admin.json' with { type: 'json' }
import PATCH_user_admin from './forms/PATCH/user/admin.json' with { type: 'json' }
import PATCH_game_status_admin from './forms/PATCH/game/status/admin.json' with { type: 'json' }
import PATCH_game_status_organizer from './forms/PATCH/game/status/organizer.json' with { type: 'json' }
import PATCH_game_admin from './forms/PATCH/game/admin.json' with { type: 'json' }
import PATCH_game_organizer from './forms/PATCH/game/organizer.json' with { type: 'json' }
import PATCH_city_timezone_admin from './forms/PATCH/city/timezone/admin.json' with { type: 'json' }
import PATCH_city_timezone_organizer from './forms/PATCH/city/timezone/organizer.json' with { type: 'json' }
import PATCH_city_currency_admin from './forms/PATCH/city/currency/admin.json' with { type: 'json' }
import PATCH_city_currency_organizer from './forms/PATCH/city/currency/organizer.json' with { type: 'json' }
import PATCH_city_country_admin from './forms/PATCH/city/country/admin.json' with { type: 'json' }
import PATCH_city_country_organizer from './forms/PATCH/city/country/organizer.json' with { type: 'json' }
import PATCH_city_vk_group_token_admin from './forms/PATCH/city/vk_group_token/admin.json' with { type: 'json' }
import PATCH_city_admin from './forms/PATCH/city/admin.json' with { type: 'json' }
import PATCH_city_organizer from './forms/PATCH/city/organizer.json' with { type: 'json' }
import PATCH_venue_admin from './forms/PATCH/venue/admin.json' with { type: 'json' }
import PATCH_venue_organizer from './forms/PATCH/venue/organizer.json' with { type: 'json' }
import PATCH_registration_channel_admin from './forms/PATCH/registration/channel/admin.json' with { type: 'json' }
import PATCH_registration_attributes_admin from './forms/PATCH/registration/attributes/admin.json' with { type: 'json' }
import PATCH_registration_Unknown from './forms/PATCH/registration/Unknown.json' with { type: 'json' }
import PATCH_registration_status_admin from './forms/PATCH/registration/status/admin.json' with { type: 'json' }
import PATCH_registration_lineup_admin from './forms/PATCH/registration/lineup/admin.json' with { type: 'json' }
import PATCH_registration_admin from './forms/PATCH/registration/admin.json' with { type: 'json' }
import PATCH_registration_organizer from './forms/PATCH/registration/organizer.json' with { type: 'json' }
import PUT_theme_cover_admin from './forms/PUT/theme/cover/admin.json' with { type: 'json' }

export const FormSchema = Object.freeze(
  /** @type {const} */ ({
    'POST/theme/cover/admin': POST_theme_cover_admin,
    'POST/theme/admin': POST_theme_admin,
    'POST/checkin/Unknown': POST_checkin_Unknown,
    'POST/user/role/admin': POST_user_role_admin,
    'POST/user/city/admin': POST_user_city_admin,
    'POST/user/password/admin': POST_user_password_admin,
    'POST/user/admin': POST_user_admin,
    'POST/game/admin': POST_game_admin,
    'POST/game/organizer': POST_game_organizer,
    'POST/city/vk_group_token/admin': POST_city_vk_group_token_admin,
    'POST/city/admin': POST_city_admin,
    'POST/venue/admin': POST_venue_admin,
    'POST/venue/organizer': POST_venue_organizer,
    'POST/registration/Unknown': POST_registration_Unknown,
    'POST/registration/admin': POST_registration_admin,
    'POST/registration/organizer': POST_registration_organizer,
    'PATCH/theme/admin': PATCH_theme_admin,
    'PATCH/user/role/admin': PATCH_user_role_admin,
    'PATCH/user/password/admin': PATCH_user_password_admin,
    'PATCH/user/admin': PATCH_user_admin,
    'PATCH/game/status/admin': PATCH_game_status_admin,
    'PATCH/game/status/organizer': PATCH_game_status_organizer,
    'PATCH/game/admin': PATCH_game_admin,
    'PATCH/game/organizer': PATCH_game_organizer,
    'PATCH/city/timezone/admin': PATCH_city_timezone_admin,
    'PATCH/city/timezone/organizer': PATCH_city_timezone_organizer,
    'PATCH/city/currency/admin': PATCH_city_currency_admin,
    'PATCH/city/currency/organizer': PATCH_city_currency_organizer,
    'PATCH/city/country/admin': PATCH_city_country_admin,
    'PATCH/city/country/organizer': PATCH_city_country_organizer,
    'PATCH/city/vk_group_token/admin': PATCH_city_vk_group_token_admin,
    'PATCH/city/admin': PATCH_city_admin,
    'PATCH/city/organizer': PATCH_city_organizer,
    'PATCH/venue/admin': PATCH_venue_admin,
    'PATCH/venue/organizer': PATCH_venue_organizer,
    'PATCH/registration/channel/admin': PATCH_registration_channel_admin,
    'PATCH/registration/attributes/admin': PATCH_registration_attributes_admin,
    'PATCH/registration/Unknown': PATCH_registration_Unknown,
    'PATCH/registration/status/admin': PATCH_registration_status_admin,
    'PATCH/registration/lineup/admin': PATCH_registration_lineup_admin,
    'PATCH/registration/admin': PATCH_registration_admin,
    'PATCH/registration/organizer': PATCH_registration_organizer,
    'PUT/theme/cover/admin': PUT_theme_cover_admin
  }),
)

export const FormKind = Object.freeze(
  /** @type {const} */ ({
    'POST/theme/cover/admin': 'Schema',
    'POST/theme/admin': 'Schema',
    'POST/checkin/Unknown': 'Schema',
    'POST/user/role/admin': 'Schema',
    'POST/user/city/admin': 'Schema',
    'POST/user/password/admin': 'Schema',
    'POST/user/admin': 'Schema',
    'POST/game/admin': 'Schema',
    'POST/game/organizer': 'Schema',
    'POST/city/vk_group_token/admin': 'Schema',
    'POST/city/admin': 'Schema',
    'POST/venue/admin': 'Schema',
    'POST/venue/organizer': 'Schema',
    'POST/registration/Unknown': 'Schema',
    'POST/registration/admin': 'Schema',
    'POST/registration/organizer': 'Schema',
    'PATCH/theme/admin': 'Schema',
    'PATCH/user/role/admin': 'Schema',
    'PATCH/user/password/admin': 'Schema',
    'PATCH/user/admin': 'Schema',
    'PATCH/game/status/admin': 'Unknown',
    'PATCH/game/status/organizer': 'Unknown',
    'PATCH/game/admin': 'Schema',
    'PATCH/game/organizer': 'Schema',
    'PATCH/city/timezone/admin': 'Schema',
    'PATCH/city/timezone/organizer': 'Unknown',
    'PATCH/city/currency/admin': 'Schema',
    'PATCH/city/currency/organizer': 'Unknown',
    'PATCH/city/country/admin': 'Schema',
    'PATCH/city/country/organizer': 'Unknown',
    'PATCH/city/vk_group_token/admin': 'Schema',
    'PATCH/city/admin': 'Schema',
    'PATCH/city/organizer': 'Unknown',
    'PATCH/venue/admin': 'Schema',
    'PATCH/venue/organizer': 'Schema',
    'PATCH/registration/channel/admin': 'Schema',
    'PATCH/registration/attributes/admin': 'Unknown',
    'PATCH/registration/Unknown': 'Schema',
    'PATCH/registration/status/admin': 'Schema',
    'PATCH/registration/lineup/admin': 'Schema',
    'PATCH/registration/admin': 'Schema',
    'PATCH/registration/organizer': 'Schema',
    'PUT/theme/cover/admin': 'FormData'
  }),
)
