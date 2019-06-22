package main.kotlin.roles

import main.kotlin.thavalon.Game
import main.kotlin.thavalon.Updater
import main.kotlin.thavalon.UpdaterPriority


/**
 * Class for Arthur, knows all good roles in game
 */
class Arthur : Role() {
    override val role : RoleType = RoleType.Arthur

    override fun getUpdaters(g: Game): List<Updater> {
        return listOf(getArthurUpdater())
    }

    private fun getArthurUpdater() : Updater {
        return Pair(updater@{g : Game ->
            val infos : List<ThavalonInformation.RolePresentInformation> = g.getGoodRoles()
                .filter { it != this } // filter our self
                .map { ThavalonInformation.RolePresentInformation(it) } // convert to information
            information.addAll(infos) // add to our information
            return@updater
        }, UpdaterPriority.Ten)
    }
}

